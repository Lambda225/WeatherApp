import { useState } from "react";
import Contener from "./components/Contener";
import Filter from "./components/Filter";
import ImageBox from "./components/ImageBox";
import TextBox from "./components/TextBox";
import WeatherDetail from "./components/WeatherDetail";
import Wrapper from "./components/Wrapper";
import WrapperResponsive from "./components/WrapperResponsive";
import ApiProvider from "./context/ApiContext";
import WeatherProvider from "./context/WeatherContext";


function App() {

  const [visible,setVisible] = useState(false)

  return (
    <div>
      <WeatherProvider>
          <Contener>
            <Wrapper>
              <ImageBox setVisible={setVisible} />
              <TextBox>
                <Filter />
                <WeatherDetail />
              </TextBox>
              <WrapperResponsive visible={visible} setVisible={setVisible} />
            </Wrapper>
          </Contener>
      </WeatherProvider>
    </div>
  );
}

export default App;
