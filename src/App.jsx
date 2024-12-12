import { useState } from "react"

//props
function Content(props){
    return <h3 style={{color: "green"}}>{props.text}</h3>
}




function App(){

    const [like,setLike] = useState(0);

    return <div>
        <img 
            src="https://randomuser.me/api/portraits/women/3.jpg" 
            alt="" 
            style={{borderRadius: "50%", display: "block", margin: "0 auto"}} 
        />
        <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
            <Content text="이름 : 손경훈"/>
            <Content text="성별 : 남자"/>
            <Content text="소개 : 사람입니다"/>
            <button style={{
                backgroundColor: "greenyellow",
                color: "red",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "10px 0"
            }}
            onClick={()=>setLike(like+1)}
            >
                ❤️ 좋아요 <span>{like}</span>
            </button>
        </div>
    </div>
}

export default App