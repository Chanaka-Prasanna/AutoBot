import { Button, Input, Layout, List } from "antd";
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;
const Home = () => {
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#495057",
    borderTop: "1px solid #52796f",
  };
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#495057",
    borderBottom: "1px solid #52796f",
  };

  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#495057",
  };

  const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#343a40",
  };

  const layoutStyle = {
    width: "100%",
    height: "100vh",
  };

  const [messages, setMessages] = useState([
    {
      user: true,
      text: "Hello, how can I help you?,Hello, how can I help you?Hello, how can I help you?Hello, how can I help you?Hello, how can I help you?Hello, how can I help you?vvvHello, how can I help you?Hello, how can I help you?Hello, how can I help you?",
    },
    { user: false, text: "Hi there! I'm your AI assistant." },
    { user: true, text: "Can you provide weather information?" },
    { user: false, text: "Sure, what location are you interested in?" },
  ]);

  const [inputValue, setInputValue] = useState("");

  // const handleSendMessage = () => {
  //   // Assuming you have a function to send messages to the AI assistant
  //   // and get a response. You can replace this with your actual logic.
  //   // const response = sendMessageToAssistant(inputValue);

  //   // Add user's message and AI assistant's response to the messages array
  //   setMessages([
  //     ...messages,
  //     { user: true, text: inputValue },
  //     { user: false, text: response },
  //   ]);
  //   setInputValue(""); // Clear the input field after sending the message
  // };
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Sider
        width="25%"
        style={{
          textAlign: "center",
          lineHeight: "120px",
          color: "#fff",
          backgroundColor: "#343a40",
        }}
      >
        Sider
      </Sider>
      <Layout>
        <Header
          style={{
            textAlign: "center",
            color: "#fff",
            height: 64,
            paddingInline: 48,
            lineHeight: "64px",
            backgroundColor: "#495057",
            borderBottom: "1px solid #52796f",
          }}
        >
          Header
        </Header>
        <Content
          style={{
            textAlign: "center",
            minHeight: 400,
            backgroundColor: "#495057",
            padding: "20px  200px",
            overflowY: "auto",
          }}
        >
          <List
            dataSource={messages}
            style={{ width: "100%" }}
            renderItem={(item) => (
              <List.Item>
                <div
                  style={{
                    backgroundColor: "#495057",
                    color: "#ffffff",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "left",
                  }}
                >
                  {item.text}
                </div>
              </List.Item>
            )}
          />
        </Content>
        <Footer
          style={{
            textAlign: "center",
            color: "#fff",
            backgroundColor: "#495057",
            borderTop: "1px solid #52796f",
          }}
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            /* onPressEnter={handleSendMessage}*/
            placeholder="Type a message..."
            style={{ width: "80%" }}
          />
          <Button type="primary" /*onClick={handleSendMessage}*/>Send</Button>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
