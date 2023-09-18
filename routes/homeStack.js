import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CardLayout from "../components/CardLayout";
import ScrollViewbutton from "../components/ScrollViewbutton";

const screens={
    Home:{
        screen:ScrollViewbutton
    },
    video:{
        screen:CardLayout
    }
}

const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack)