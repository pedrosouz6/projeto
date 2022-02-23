import Header from "../header/header";
import Wellcome from "../wellcome/index";
import Benefits from "../benefits/index";
import Operation from "../operation/index";
import Choise from "../choise/index";
import Questions from "../questions/index";
import Footer from "../footer/index";

export default function Index(){
    return(
        <>
            <Header/>
            <Wellcome/>
            <Benefits/>
            <Operation/>
            <Choise/>
            <Questions/>
            <Footer/>
        </>
    )
}