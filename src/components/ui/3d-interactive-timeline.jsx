import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function useElementInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function TimelineEventCard({
  event,
  index,
  activeEvent,
  setActiveEvent,
  mousePosition,
}) {
  const [ref, inView] = useElementInView({ threshold: 0.28 });
  const controls = useAnimation();
  const isEven = index % 2 === 0;
  const isActive = activeEvent === event.id;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article
      ref={ref}
      className={`timeline3d-item ${isEven ? "is-right" : "is-left"}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          x: isEven ? 54 : -54,
          y: 24,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.72, ease: "easeOut" },
        },
      }}
    >
      <button
        className="timeline3d-node"
        type="button"
        aria-label={`Toggle ${event.title}`}
        onClick={() =>
          setActiveEvent(activeEvent === event.id ? null : event.id)
        }
      >
        <motion.span
          className="timeline3d-node-icon"
          whileHover={{ scale: 1.15 }}
          animate={{
            boxShadow:
              activeEvent === event.id
                ? [
                    "0 0 0 rgba(14, 165, 233, 0)",
                    "0 0 32px rgba(14, 165, 233, 0.55)",
                    "0 0 0 rgba(14, 165, 233, 0)",
                  ]
                : "0 0 0 rgba(14, 165, 233, 0)",
          }}
          transition={{
            repeat: activeEvent === event.id ? Infinity : 0,
            duration: 1.5,
          }}
        >
          {event.icon || index + 1}
        </motion.span>
      </button>

      <motion.div
        className={`timeline3d-card ${isActive ? "is-active" : ""}`}
        onMouseEnter={() => setActiveEvent(event.id)}
        onMouseLeave={() => setActiveEvent(null)}
        whileHover={{
          y: -6,
          x: isEven ? 4 : -4,
          transition: { duration: 0.25 },
        }}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateY(${
            mousePosition.x * (isEven ? -3 : 3)
          }deg) rotateX(${mousePosition.y * -2.5}deg)`,
        }}
      >
        {event.image && (
          <div className="timeline3d-image">
            <motion.img
              src={event.image}
              alt={event.title}
              initial={{ scale: 1.12 }}
              animate={{
                scale: isActive ? 1.04 : 1,
                y: isActive ? -8 : 0,
              }}
              transition={{ duration: 0.7 }}
            />
            {event.category && (
              <span className="timeline3d-category">{event.category}</span>
            )}
          </div>
        )}

        <div className="timeline3d-content">
          <div className="timeline3d-meta">
            <time>{event.date}</time>
            <span className="timeline3d-pulse" />
          </div>

          <h3>{event.title}</h3>
          <p className="timeline3d-company">{event.company}</p>

          <div className="timeline3d-description">
            <p>{event.description}</p>
          </div>

          <div className="timeline3d-tech">
            {event.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <motion.span
          className="timeline3d-progress"
          initial={{ width: "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.45 }}
        />
      </motion.div>
    </motion.article>
  );
}

function Timeline3D({ events, title = "Experience.", eyebrow = "Journey" }) {
  const [activeEvent, setActiveEvent] = useState(events[0]?.id || null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((event.clientY - rect.top) / rect.height) * 2 - 1,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="timeline3d" ref={containerRef}>
      <div className="timeline3d-shell">
        <div className="timeline3d-heading">
          <p>{eyebrow}</p>
          <h2>{title}</h2>
        </div>

        <div className="timeline3d-track" aria-label="Professional timeline">
          {events.map((event, index) => (
            <TimelineEventCard
              key={event.id}
              event={event}
              index={index}
              activeEvent={activeEvent}
              setActiveEvent={setActiveEvent}
              mousePosition={mousePosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline3D;
