export function Post(props){

    //props em forma de objeto
    //props: {author: "", content: ""}
    return (
        <div>
            <strong>
                {props.author}
            </strong>
            <p>
                {props.content}
            </p>
        </div>
            
    ) 
}

// Default: export default Post
// export function Post(){
// Default export VS Named exports