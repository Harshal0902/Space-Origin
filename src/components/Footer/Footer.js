import "./Footer.css"
export default function Footer() {
    return (
        // <div className="footer_text">&lt;/&gt; with <img alt="love" className="footer_icon" src="https://img.icons8.com/cotton/25/000000/like--v1.png" /> and &nbsp;<img alt="React Js" class="react-logo-footer" src="https://img.icons8.com/officel/20/000000/react.png" /> by Team Hack Elite
        // </div>
        <div className="footer_text flex text-white justify-center text-xl py-2 items-center w-full mx-auto">
            &lt;/&gt; with <img className="w-8 mb-1" src="https://img.icons8.com/cotton/25/000000/like--v1.png" alt="Love" />, and <img className="w-6 mb-1 mx-2" src="https://img.icons8.com/officel/20/000000/react.png" alt="React" /> by Team Hack Elite
        </div>
    )
}
