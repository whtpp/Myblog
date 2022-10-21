import "./App.css";
import {
  BackTop,
  Card,
  Divider,
  List,
  Typography,
  Progress,
  Timeline,
  Switch,
} from "antd";


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
const data1 = [
  "排序",
  "手写promise",
  "数组手写题",
  "正则表达式",
  "深浅拷贝",
  "原型与继承",
];
const data2 = ["浅谈标准流", "三种声明变量的区别"];
const data3 = ["git教程", "vue源码解析", "js+es6"];
const gridStyle = {
  width: "25%",
  textAlign: "center",
};
const onChange = (checked) => {
  let backgroundColor = document.querySelector(".App");
  checked = !checked;
  if (checked === false) {
    backgroundColor.setAttribute("style", "background:rgb(205, 216, 234)");
  } else {
    backgroundColor.setAttribute("style", "background:rgb(236, 236, 236)");
  }
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
              position: "fixed",
            }}
            cover={
              <img
                alt="啊欧，网速有点慢噢，头像加载不出来"
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
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            left: "50px",
          }}
        >
          <span>切换模式</span>
          <Switch
            className="switch"
            onChange={onChange}
            style={{
              marginLeft: "30px",
            }}
          />
        </div>
      </div>

      <div className="middle">
        <div
          style={{
            margin: "30px",
            backgroundColor: "#fff",
            overflow:'hidden'
          }}
        >
          <div
            style={{
              height: "50px",
              backgroundColor: "#000",
            }}
          ></div>
          <div
            style={{
              float: "left",
              width: "60%",
              height: "300px",
            }}
          >
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              学习进程:
            </span>
            <Progress
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              percent={70}
              style={{
                margin: "20px",
                width: "300px",
              }}
            />
            <Timeline
              style={{
                margin: "25px",
              }}
            >
              <Timeline.Item color="red">
                基础三件套学习完成 2021-12-01
              </Timeline.Item>
              <Timeline.Item color="green">
                Vue2.x 进阶 2022-02-20
              </Timeline.Item>
              <Timeline.Item color="orange">
                疯狂刷算法 2022-07-10
              </Timeline.Item>
              <Timeline.Item color="blue">React初探 2022-09-10</Timeline.Item>
              <Timeline.Item color="grey">
                计算机网络杂七杂八 2022-10-20
              </Timeline.Item>
            </Timeline>
          </div>
          <div
            style={{
              marginLeft: "60%",
              width: "auto",
              height: "300px",
              overflow:'hidden'
            }}
          >
            <Card
              title="这个太高了，再努努力吧 !"
              bordered={false}
              style={{
                display: "inline-block",
              }}
            >
              <img
                width={"80%"}
                src="https://thumbnail0.baidupcs.com/thumbnail/45ff175fcg34fd6335468a37b5481b14?fid=1101979636015-250528-540947957574648&time=1666332000&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-EKWc1hLNxzewZ3JRBQs0PoAY678%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=9115357998662221832&dp-callid=0&file_type=0&size=c710_u400&quality=100&vuk=-&ft=video"
                alt="啊欧，网速有点慢噢，图片加载不出来"
              />
            </Card>
          </div>
        </div>
        <Divider>text</Divider>
        <Card
          title="随笔"
          style={{
            margin: "30px",
            textAlign: "left",
          }}
        >
          <Card type="inner" title="浅谈标准流">
            <p>什么是标准流？</p>
            <a href="https://juejin.cn/post/7156891970081423374/">
              点我查看更多
            </a>
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="三种声明变量的区别"
          >
            <p>var、let、const小结（简洁版一目了然）</p>
            <a href="https://juejin.cn/post/7026337433927188517">
              点我查看更多
            </a>
          </Card>
        </Card>
        <Divider>code</Divider>
        <Card
          title="js基础"
          style={{
            margin: "30px",
            textAlign: "left",
          }}
        >
          <Card type="inner" title="排序">
            <p>
              归并排序 （nlogn）: 递归不断先分成两个数组进行内部排序，再合并
            </p>
            <p>
              快速排序 O(nlogn) : 任意选择一个目标值，递归小的放左边，大的放右边
            </p>
            <a href="https://juejin.cn/post/7156801737678913549">
              点我查看更多
            </a>
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="手写promise"
          >
            <p>
              简易整理了一部分promise的手写，实现了一下then和promise的基本结构，想看完整版可看后盾人课程...
            </p>
            <a href="https://juejin.cn/post/7156803881630957575">
              点我查看更多
            </a>
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="面试常见数组手写题"
          >
            <p>
              写了几种面试常见的数组方法实现，扁平化，push，filter，map，repeat等，有不足之处欢迎指正...
            </p>
            <a href="https://juejin.cn/post/7156806372913315848">
              点我查看更多
            </a>
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="手撕数组去重"
          >
            <p>9种方法手撕数组去重，涵盖多种数据类型</p>
            <a href="https://www.nowcoder.com/discuss/401740862349209600">
              点我查看更多
            </a>
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="常用正则表达式"
          >
            <p>
              整理了一些面试常用的正则表达式的校验，这一块知识之前一直很乱，以下代码可供参考检验，逻辑不严谨之处欢迎指正，谢谢...
            </p>
            <a href="https://juejin.cn/post/7156808656862838821">
              点我查看更多
            </a>
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="手撕深浅拷贝"
          >
            <p>
              此文只展示代码，对深浅拷贝定义不清楚可以参考W3C官网解析或自行百度百科
            </p>
            <a href="https://juejin.cn/post/7156811848636071966/">
              点我查看更多
            </a>
          </Card>
        </Card>
        <Divider>arithmetic</Divider>
        <Card
          title="经典算法与手写题"
          style={{
            margin: "30px",
          }}
        >
          <Card.Grid style={gridStyle}>
            <a href="https://bigfrontend.dev/zh/problem/implement-Promise-all">
              实现promise.all
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://bigfrontend.dev/zh/problem/create-lazyman">
              创建lazyMan
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://bigfrontend.dev/zh/problem/longest-substring-with-unique-characters">
              最长不重复子串
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://bigfrontend.dev/zh/problem/implement-curry">
              实现curry
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://bigfrontend.dev/zh/problem/implement-basic-throttle">
              手写throttle()
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://bigfrontend.dev/zh/problem/implement-basic-debounce">
              手写debounce()
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://leetcode.cn/problems/trapping-rain-water/">
              接雨水
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://leetcode.cn/problems/palindrome-partitioning/">
              分割回文串
            </a>
          </Card.Grid>
        </Card>
        <Divider>collect</Divider>
        <Card
          style={{
            textAlign: "left",
          }}
        >
          <Card
            type="inner"
            title="git教程"
            extra={
              <a href="https://www.liaoxuefeng.com/wiki/896043488029600">
                More
              </a>
            }
          >
            清楚详细，git部分看这个就够了
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="Vue源码解析"
            extra={<a href="https://github.com/answershuto/learnVue">More</a>}
          >
            有一点点晦涩难懂
          </Card>
          <Card
            style={{
              marginTop: 16,
            }}
            type="inner"
            title="JS进阶+ES6"
            extra={<a href="https://github.com/mqyqingfeng/Blog">More</a>}
          ></Card>
        </Card>
      </div>
      <div className="right">
        <Divider
          orientation="left"
          style={{
            marginTop: "400px",
          }}
        >
          随笔
        </Divider>
        <List
          size="small"
          bordered
          dataSource={data2}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Divider
          orientation="left"
          style={{
            marginTop: "500px",
          }}
        >
          js基础
        </Divider>
        <List
          bordered
          dataSource={data1}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text
                mark
                style={{
                  float: "left",
                }}
              >
                [手撕]
              </Typography.Text>{" "}
              {item}
            </List.Item>
          )}
        />
        <Divider
          orientation="left"
          style={{
            marginTop: "1100px",
          }}
        >
          不错的博客
        </Divider>
        <List
          bordered
          dataSource={data3}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text
                mark
                style={{
                  float: "left",
                }}
              ></Typography.Text>
              {item}
            </List.Item>
          )}
        />
        <div
          style={{
            height: "50vh",
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
