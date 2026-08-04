const DISCORD_WIDGET_API =
  "https://discord.com/api/guilds/1075511621469868142/widget.json";

const onlineCount = document.querySelector("#online-count");
const serverName = document.querySelector("#server-name");
const komunityLink = document.querySelector("#komunity-link");
const toast = document.querySelector("#toast");

/**
 * Discord's public widget endpoint gives us the server name and the number of
 * currently visible online members. If the request fails, the page keeps its
 * clean fallback copy instead of showing an error.
 */
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

function showToast() {
  toast.classList.add("show");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

komunityLink?.addEventListener("click", (event) => {
  if (komunityLink.dataset.needsUrl === "true") {
    event.preventDefault();
    showToast();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
loadDiscordStatus();
