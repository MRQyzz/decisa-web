import "../../styles/mesh.css";

export default function Mesh () {
    return (
        <div className="mesh -z-10 overflow-hidden pointer-events-none">
            <div className="blob one"></div>
            <div className="blob two"></div>
            <div className="blob three"></div>
            <div className="blob four"></div>
        </div>
    )
}