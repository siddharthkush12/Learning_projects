import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token"
    );
  }
};

//+++++++++++++++++++++++++++++++++++++++++++++++++   REGISTER  ++++++++++++++++++++++++++++++++

/** STEPS
 * get user details from frontend
 * validation - not empty
 * check if user already exists :username,email
 * check for images, check for avtar
 * upload them to cloudinary: avtar
 * create user object - create entry in db
 * remove password and refresh token field from response
 * check for user creation
 * return response
 */

const registerUser = asyncHandler(async (req, res) => {
  // validation(also done by if condition on seperate)
  const { fullname, email, username, password } = req.body; // Info from frontend
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are required");
  }

  // not already exist
  const existedUser = await User.findOne({
    $or: [{ username }, { email }], //either email or username
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  //Images upload and checking

  const avtarLocalPath = req.files?.avtar[0]?.path;
  var coverImageLocalPath;

  if (!avtarLocalPath) {
    throw new ApiError(400, "Avtar file required");
  }

  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  const avtar = await uploadOnCloudinary(avtarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avtar) throw new ApiError(400, "Avtar file required");

  const user = await User.create({
    fullname,
    avtar: avtar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken" //Not select password and refreshToken
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Sucessfully"));
});

//+++++++++++++++++++++++++++++++++++++++++++++++++  LOGIN  ++++++++++++++++++++++++++++++++

/**
 * req body-> data
 * username and email
 * find user
 * password check
 * access and refresh token
 * send cookie
 */

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  if (!(email || username)) {
    throw new ApiError(400, "username or email is required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findOne(user._id).select(
    "-password -refreshToken"
  );

  //Cookies
  const options = {
    httpOnly: true,
    secure: true
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken
        },
        "User logged in successfully"
      )
    );
});

//+++++++++++++++++++++++++++++++++++++++++++++++++  LOGOUT  ++++++++++++++++++++++++++++++++

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(
    new ApiResponse(
      200,
      {},
      "User logged Out"
    )
  );

});

export { registerUser, loginUser, logoutUser };

