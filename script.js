const DISCORD_WIDGET_API =
  "https://discord.com/api/guilds/1075511621469868142/widget.json";

const onlineCount = document.querySelector("#online-count");
const serverName = document.querySelector("#server-name");
async function loadDiscordStatus() {
  try {
    const response = await fetch(DISCORD_WIDGET_API, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) throw new Error(`Discord widget returned ${response.status}`);

    const data = await response.json();

    if (typeof data.presence_count === "number") {
      onlineCount.textContent = data.presence_count.toLocaleString();
    }

    if (data.name) {
      serverName.textContent = data.name;
      document.title = `Kelixo — ${data.name}`;
    }
  } catch (error) {
    onlineCount.textContent = "Live";
    console.info("Discord status unavailable:", error);
  }
}

document.querySelector("#year").textContent = new Date().getFullYear();
loadDiscordStatus();
