import { useEffect, useRef } from 'react'
import FadeUp from './FadeUp'

const REASONS = [
  '让肺部真正呼吸一次新鲜空气',
  '脱离屏幕，眼睛休息一整天',
  '用走路代替坐着，激活沉睡的身体',
  '睡前不刷手机，听虫鸣入眠',
  '把焦虑踩在脚下，一步一步走掉',
  '感受阳光直接落在皮肤上的温度',
  '闻一闻雨后松林的气息',
  '踩一脚落叶，听那声酥脆',
  '喝一口山泉水，体会什么叫甘甜',
  '在没有光污染的地方看满天繁星',
  '感受风真实地从耳边吹过',
  '把所有颜色还原成绿色和蓝色',
  '在溪边坐下来，只听水声',
  '看云影在山脊上缓缓移动',
  '和老朋友走一段路，说说久违的话',
  '带孩子认识第一朵野花',
  '与家人一起做一顿户外饭',
  '和伴侣共同挑战一段坡路',
  '遇见陌生人，交换一个微笑',
  '让一只小动物靠近，学会不打扰',
  '找到一条没走过的小径',
  '看地形图，然后用双脚验证它',
  '把一块石头翻过来，研究反面',
  '爬上山顶，只为看另一面是什么',
  '记录二十种不同的鸟叫声',
  '在迷路边缘学会判断方向',
  '徒步到一个没有信号的地方',
  '搭一顶帐篷，试试自己能不能睡着',
  '找一块岩石，推断它的年龄',
  '追踪一条溪流，看它流向何处',
  '在自然面前感受渺小，然后释怀',
  '离开舒适区，发现自己比想象更能吃苦',
  '用双脚丈量一段距离，找回时间的真实感',
  '在山顶许下一个只有自己知道的愿望',
  '把一件纠结的事带上山，下山时扔在那里',
  '提醒自己人类只是自然的一小部分',
  '在日出前出发，把黎明留给自己',
  '写一篇没人看的山野日记',
  '大声喊一嗓子，只为测试山的回声',
  '出一身汗，洗掉积累的疲倦',
  '在无人处发呆二十分钟，不思考任何事',
  '重新体会饥饿，然后好好吃一顿饭',
  '观察苔藓，学会慢下来',
  '摸一摸老树的树皮，感受它的纹路',
  '找一块平地坐下，从地平线角度看世界',
  '给自己一天不需要回复任何消息',
  '用脚步丈量自己究竟能走多远',
  '只带必需品，练习轻装上阵',
  '为下一次出发，提前种下一个期待',
  '因为你值得一次真正的喘息',
]

// Deterministic pseudo-random based on index
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

interface Lane {
  items: { text: string; idx: number; size: number; opacity: number; speed: number }[]
  y: number
}

function buildLanes(): Lane[] {
  const laneCount = 8
  const lanes: Lane[] = Array.from({ length: laneCount }, (_, i) => ({
    y: 8 + (i / (laneCount - 1)) * 84,
    items: [],
  }))

  // Distribute all 50 reasons across lanes, cycling
  REASONS.forEach((text, idx) => {
    const lane = idx % laneCount
    const r0 = seededRand(idx * 3)
    const r1 = seededRand(idx * 3 + 1)
    const r2 = seededRand(idx * 3 + 2)
    // size: 11–22px
    const size = 11 + Math.floor(r0 * 12)
    // opacity: 0.35–0.85
    const opacity = 0.35 + r1 * 0.5
    // speed: 40–80s for full pass
    const speed = 40 + r2 * 40
    lanes[lane].items.push({ text, idx, size, opacity, speed })
  })

  return lanes
}

const lanes = buildLanes()

export default function Reasons() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Pause animation on hover
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const pause = () => el.querySelectorAll<HTMLElement>('.danmaku-row').forEach(r => (r.style.animationPlayState = 'paused'))
    const resume = () => el.querySelectorAll<HTMLElement>('.danmaku-row').forEach(r => (r.style.animationPlayState = 'running'))
    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    return () => { el.removeEventListener('mouseenter', pause); el.removeEventListener('mouseleave', resume) }
  }, [])

  return (
    <section id="reasons" style={{ padding: 0, maxWidth: 'none', overflow: 'hidden' }}>

      {/* 弹幕 + 居中标题 整体容器 */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          height: 'clamp(520px,70vh,820px)',
          overflow: 'hidden',
        }}
      >
        {/* 左右渐隐 */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'linear-gradient(to right, var(--bg) 0%, transparent 10%, transparent 90%, var(--bg) 100%)' }} />

        {/* 标题后方径向暗晕 */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 52% 42% at 50% 50%, rgba(8,16,10,0.82) 30%, transparent 100%)',
        }} />

        {/* 居中标题 */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 4,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', pointerEvents: 'none',
        }}>
          <FadeUp direction="none" duration={1.0}>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(48px,6.5vw,96px)',
              fontWeight: 300, letterSpacing: '0.04em', lineHeight: 1.08,
              color: 'var(--text)',
            }}>
              来到山野的<br />100 个理由
            </h2>
          </FadeUp>
        </div>

        {lanes.map((lane, li) => {
          // Each lane is a scrolling row; items placed end-to-end with gaps
          // Base speed for the lane (slowest item's speed drives the row)
          const rowSpeed = lane.items.reduce((min, it) => Math.min(min, it.speed), 999)

          return (
            <div
              key={li}
              className="danmaku-row"
              style={{
                position: 'absolute',
                top: `${lane.y}%`,
                transform: 'translateY(-50%)',
                whiteSpace: 'nowrap',
                // Animate: slide from 0 → -50% (we duplicate content for seamless loop)
                animation: `danmaku-scroll ${rowSpeed}s linear infinite`,
                animationDelay: `${-seededRand(li * 7) * rowSpeed}s`,
                // Alternate rows direction
                ...(li % 2 === 1 ? { animationDirection: 'reverse' } : {}),
              }}
            >
              {/* Duplicate twice for seamless loop */}
              {[0, 1].map(dup => (
                <span key={dup} style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
                  {lane.items.map((item) => (
                    <span
                      key={`${dup}-${item.idx}`}
                      style={{
                        display: 'inline-block',
                        fontSize: item.size,
                        opacity: 0.55 + (item.opacity - 0.35) * 0.5,
                        color: item.idx % 7 === 0 ? 'var(--gold)' : item.idx % 5 === 0 ? 'rgba(245,240,232,0.90)' : 'rgba(245,240,232,0.65)',
                        fontFamily: item.size > 17 ? 'var(--serif)' : 'inherit',
                        letterSpacing: '0.03em',
                        padding: '0 clamp(20px,2.5vw,44px)',
                        userSelect: 'none',
                      }}
                    >
                      {item.text}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes danmaku-scroll {
          from { transform: translateY(-50%) translateX(0); }
          to   { transform: translateY(-50%) translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
