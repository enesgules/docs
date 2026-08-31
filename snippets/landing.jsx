export const Hero = ({ children }) => (
  <div className="u-hero">
    <h1>Build with Upstash</h1>
    <p>
      Serverless data, messaging, and AI infrastructure for developers. Scale to
      zero, pay per request.
    </p>
    <div className="u-actions">
      <a className="u-action u-action--primary" href="/agent-resources/mcp">
        Agent Setup
      </a>
      {children}
    </div>
  </div>
);

export const SectionHead = ({ title, sub, divider = false }) => (
  <div className={`u-section${divider ? " u-section--divider" : ""}`}>
    <h2>{title}</h2>
    {sub ? <p className="u-sub">{sub}</p> : null}
  </div>
);

export const ProductGrid = () => {
  const products = [
    { name: "Redis", desc: "Serverless Redis with per-request or fixed pricing.", href: "/redis/overall/getstarted", icon: "redis" },
    { name: "QStash", desc: "Message queue and scheduler over HTTP.", href: "/qstash/overall/getstarted", icon: "qstash" },
    { name: "Workflow", desc: "Durable serverless functions.", href: "/workflow/getstarted", icon: "workflow" },
    { name: "Box", desc: "Secure sandboxes for AI agents and code.", href: "/box/overall/quickstart", icon: "box" },
    { name: "Vector", desc: "Vector database for AI and LLM apps.", href: "/vector/overall/getstarted", icon: "vector" },
    { name: "Search", desc: "Full-text and semantic search.", href: "/search/overall/getstarted", icon: "search" },
  ];

  return (
    <div className="u-grid u-grid--fixed2">
      {products.map((product) => (
        <a key={product.href} href={product.href} className="u-card u-product">
          <img
            className="u-card__icon"
            src={`https://upstash.com/docs/img/icons/${product.icon}.svg`}
            alt=""
          />
          <div className="u-card__body">
            <div className="u-card__title">{product.name}</div>
            <div className="u-card__desc">{product.desc}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const UtilityGrid = () => {
  const tools = [
    { name: "Rate Limit", desc: "Protect your APIs from abuse.", href: "/redis/sdks/ratelimit-ts/overview" },
    { name: "Realtime", desc: "The easiest way to add realtime.", href: "/realtime/overall/quickstart" },
    { name: "AI Tracking", desc: "AI agent traffic analytics for Next.js.", href: "https://github.com/upstash/agent-analytics" },
  ];

  return (
    <div className="u-grid u-grid--fixed2">
      {tools.map((tool) => (
        <a key={tool.href} href={tool.href} className="u-card u-tool">
          <div className="u-card__body">
            <div className="u-card__title">{tool.name}</div>
            <div className="u-card__desc">{tool.desc}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const Community = () => {
  const links = [
    { name: "Discord", desc: "Ask questions and meet other developers.", href: "https://upstash.com/discord" },
    { name: "Blog", desc: "Read product news and engineering stories.", href: "https://upstash.com/blog" },
    { name: "X / Twitter", desc: "Follow the latest Upstash updates.", href: "https://x.com/upstash" },
  ];

  return (
    <div className="u-grid u-grid--fixed3">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="u-card u-community">
          <div className="u-card__body">
            <div className="u-card__title">{link.name}</div>
            <div className="u-card__desc">{link.desc}</div>
          </div>
        </a>
      ))}
    </div>
  );
};
