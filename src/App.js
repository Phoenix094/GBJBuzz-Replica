import Navbar from "./components/Navbar/Navbar"
import Introduction from "./components/Introduction/Introduction"
import Branding from "./components/Branding/Branding"
import ContactUs from "./components/ContactUs/ContactUs"
import RightImgCard from "./components/Cards/RightImgCard"
import LeftImgCard from "./components/Cards/LeftImgCard"
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import { Paper, Stack } from "@mui/material"

const App = () => {
  return (
    <div className="app">

      <Navbar />
      <Introduction />
      <Paper elevation={4}>
        <Stack direction='column' spacing={4} py={9}>

          <RightImgCard heading={'XPan Buzz'} subHeading={'Digital Marketing Services'} desc={'Your brand growth partner. Expert social media, content, SEO and ads strategies. Boost sales, connect with target audience'} img={card1} />
          <LeftImgCard heading={'7I Buzz'} subHeading={'AI & Software based service'} desc={'AI powered data solution. Specializing in analysis, business intelligence, machine learning. Make informed decisions, manage big data.'} img={card2} />
          <RightImgCard heading={'LibeX Buzz'} subHeading={'EdTech & Learing Platform'} desc={'Edtech platform enpower interns, enchance product development. unleash creativity for market success and brand building.'} />
          <LeftImgCard heading={'BlockX Buzz'} subHeading={'Blockchain based service'} desc={'Blockchain services secure data. Innovative tech and solidity-based apps protect sensitive data, empowering confident business safeguarding'} img={card3} />
          <RightImgCard heading={'CyberX Buzz'} subHeading={'Cyber Security'} desc={'Blockchain services ensure data security with inovative technology and solidity based application for confident business safeguarding.'} img={''} />
        </Stack>
      </Paper>
      <Branding />
      <ContactUs />

    </div>
  )
}

export default App
