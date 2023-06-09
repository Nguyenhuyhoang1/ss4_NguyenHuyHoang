import { Layout  } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Headers from "./Headers";
import "./index.scss";
import Standars from "./Standars";
import Double from "./Double";
import King from "./King";
import Siders from "./Siders";
// import Header1 from "./Header1";
export default function index() {
  return <div><Layout>
  <Sider style={{background: "#FFF", textAlign: "center", display: "inline-block"}}><Siders /> </Sider>   
    <Layout>
        <Content>                        
            <Headers />   
            {/* <Header1 />                */}
            <Standars />
            <Double />
            <King />
        </Content>
    </Layout>
</Layout></div>;
}
