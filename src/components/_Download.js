import axios from "axios";

const _Download = () => {
  const token = localStorage.getItem("token11");
  //   const [] = useState("");

  async function onDownload() {
    try {
      console.log({ token });
      let resp = await axios.get("http://52.78.15.205:3001/my/files", {
        headers: { authorization: token },
      });
      console.log({ new: resp });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 style={{ color: "red" }}>Download</h1>
      <button onClick={onDownload}>Download</button>
    </div>
  );
};

export default _Download;
