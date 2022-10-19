import "./App.css";
import { BackTop, Card } from "antd";
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "rgb(125, 163, 223)",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
function App() {
  return (
    <div className="App">
      <div className="left">
        <div
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            hoverable
            style={{
              width: "200px",
              marginTop: "100px",
            }}
            cover={
              <img
                alt="example"
                src="https://i.postimg.cc/dt8SBRP0/73e88e6d481bb18a.jpg"
              />
            }
          >
            <p>
              <span>我会吐泡泡</span>
            </p>
            <p>
              <span className="likou">力扣:</span>{" "}
              <a href="https://leetcode.cn/u/ci-wa-wa-yao-ku-liao/">
                https://leetcode.cn/u/ci-wa-wa-yao-ku-liao/
              </a>
            </p>
            <p>
              <span className="git">github:</span>
              <a href="https://github.com/whtpp?tab=repositories">
                https://github.com/whtpp?tab=repositories
              </a>
            </p>
          </Card>
        </div>
      </div>

      <div className="middle"></div>
      <div className="right">
        <div
          style={{
            height: "600vh",
            padding: 8,
          }}
        >
          <BackTop>
            <div style={style}>UP</div>
          </BackTop>
        </div>
      </div>
    </div>
  );
}

export default App;
