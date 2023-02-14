import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ApolloClient, InMemoryCache, gql,} from '@apollo/client'
import { createHttpLink } from '@apollo/client'
import crossFetch from 'cross-fetch'
import Audio from '@/components/Audio'
import LessonSection from '@/components/LessonSection'
import Text from '@/components/Text'
import Video from '@/components/Video'
import { Carousel } from '@mantine/carousel'








const inter = Inter({ subsets: ['latin'] })



export default function Home(messages: any) {
  // const messages2 = messages.messages
  // const messages3 =  messages.messages[0].attributes.greetings
  // const messages4 =  messages.messages[1].attributes.greetings
  const messages5 = messages.messages.data[0].attributes.audio_Relation.data
  const lessontitle = messages.messages.data[0].attributes.lesson_title

  const lessonlist = messages.messages.data
  console.log(messages)
 
  return (
   

   
    <div className='w-full text-center mb-4 bg-gradient-to-br  from-[#2c3e50] to-[#4ca1af]'> 
    <h1 className='text-7xl text-white mt-2 font-extralight'>Blockchain<span className='text-blue-500 '>Basics</span></h1>
    
       <div className='w-100%  bg-gradient-to-br from-[#2c3e50] to-[#4ca1af] shadow-lg '>
        <Carousel className='w-full ' withIndicators >
    {lessonlist.map((i: any) => (
       <Carousel.Slide key={i} className='snap-center w-full bg-gradient border-none shadow-lg h-[1450px] from-red-900 to-gray-300'>     
          <h1 className='text-3xl m-2 text-white font-extralight'>{i.attributes.lesson_title}</h1>
          <div className='flex sd:flex-1 flex-row justify-around'>
           
          <Text info={i.attributes.texts.data}/>  

            
          <div className='rounded-xl'>

          <Video info={i.attributes.videos.data}/>     
          </div>
            </div>  
            <div className='ml-[900px] relative mt-[-650px]'>
          <Audio info={i.attributes.audio_Relation.data}/>     
              </div> 
         </Carousel.Slide> 
      
      ))}
    </Carousel>
      </div>
    
    </div>
  
  )
}
export async function getStaticProps() {
  
  const httpLink = createHttpLink({
    uri: process.env.STRAPI_GRAPHQL_API,
    credentials: 'same-origin',
    fetch: crossFetch,
  });
  
  const client = new ApolloClient({
    // link: (httpLink),
    uri: 'https://strapi-production-79fd.up.railway.app/graphql/',
    cache: new InMemoryCache(),
  })

  const {data} = await client.query({
    query: gql `
    query {lessons {
      data {
        attributes {
          lesson_title
          texts {data{attributes{
                title
                text_content
                text_image
                modals{data{attributes{
                  title
                  modal_text
                  modal_imageURL       
                }}}
              }}}
          videos {data{attributes{
                video_URL
                title
                vide_description}}}
          audio_Relation {data {attributes {
                audio_URL
                audio_image
                title}}}}}
        }
      }
    
    `
  })
  return {
    props: {
      // messages: data.messages.data
      messages: data.lessons,
      check: data
    }
  }
  

};

