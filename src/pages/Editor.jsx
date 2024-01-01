import { Header } from "../components";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

export default function Editor() {
  const {  quillRef } = useQuill({
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }],

        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],

        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image", "video"],
        [{ color: [] }, { background: [] }],

        ["clean"],
      ],
    },
  });

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <div ref={quillRef} className="h-[400px] text-xl"></div>
    </div>
  );
}
