export default function SectionBlend() {
  return (
    <div style={{
      height: 80,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 中心横向光晕，极细极淡 */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40%',
        height: 1,
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(201,168,76,0.18) 0%, transparent 100%)',
        filter: 'blur(2px)',
      }} />
    </div>
  )
}
