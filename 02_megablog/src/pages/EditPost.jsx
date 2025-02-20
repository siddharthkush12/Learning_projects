import React from 'react'
import { useEffect,useState } from 'react'
import { Container,Postform } from '../components'
import { useNavigate,useParams } from 'react-router'
import databaseservice from '../appwrite/dataAuth'

function EditPost() {
    const [posts,setPosts]=useState(null)
    const {slug}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        if(slug){
            databaseservice.getPost(slug).then((post)=>{
                if(post){
                   setPosts(post) 
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])

  return posts? 
    <div className='py-8'>
        <Container>
            <Postform post={posts}/>
        </Container>
    </div>
  : null
}

export default EditPost