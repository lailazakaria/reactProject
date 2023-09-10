import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/header/header'
import Homee from '../../components/home/home'
import SectionChosen from '../../components/section-choose/section'
// import SectionChosen from '../../components/section-choose/section'


export default function Home() {
  return (
    <main >
      <Header />
      <Homee></Homee>
    {/* <div className="container">
      <SectionChosen title='Best properties in town' paragragh='Haus group offers top properties handpicked by our agents. Explore the best we have to offer and choose the most suitable property according to your needs.' />
      <SectionChosen title='Best properties in town' paragragh='Haus group offers top properties handpicked by our agents. Explore the best we have to offer and choose the most suitable property according to your needs.' />
      <SectionChosen title='Best properties in town' paragragh='Haus group offers top properties handpicked by our agents. Explore the best we have to offer and choose the most suitable property according to your needs.' />
      <SectionChosen title='Best properties in town' paragragh='Haus group offers top properties handpicked by our agents. Explore the best we have to offer and choose the most suitable property according to your needs.' />
      </div> */}
<SectionChosen></SectionChosen>
    </main>
  )
}
