import BannerScreen from "../Banner/BannerScreen";
import HomePageLocationBlock from "../Blocks/HomePageLocationBlock";
import QualityStandards from "../Blocks/QualityStandards";
import ReclamBlock from "../Blocks/ReclamBlock";
import FiltersHomePageScreen from "../FiltersHomePageScreen/FiltersHomePageScreen";
import NavBarScreen from "../NavBar/Navbar";
import MortgageHomePageBlock from '../Blocks/MortgageHomePageBlock'
import ButtonBlock from "../Blocks/ButtonBlock/ButtonBlock";

export default function HomePageScreen() {
    return (
        <>
            <NavBarScreen />
            <BannerScreen />
            <div
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <div style={{ width: '1200px', padding: '10px' }}>
                    <FiltersHomePageScreen />
                    <ButtonBlock />
                    <HomePageLocationBlock />
                    <QualityStandards />
                    <ReclamBlock/>
                    <MortgageHomePageBlock />
                </div>

            </div>

        </>
    )
}