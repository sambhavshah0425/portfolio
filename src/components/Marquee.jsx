const techs = ['React','Next.js','TypeScript','Node.js','Express.js','MongoDB','PostgreSQL','Python','Java','TensorFlow','OpenCV','LangChain','Docker','Jenkins','AWS','GitHub Actions','CI/CD','System Design']

export default function Marquee() {
  const track = techs.map((t, i) => (
    <span key={i}>{t} <span className="star">✦</span> </span>
  ))

  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>{track}</span>
        <span>{track}</span>
      </div>
    </div>
  )
}
