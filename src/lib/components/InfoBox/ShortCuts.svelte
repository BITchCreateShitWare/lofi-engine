<script lang="ts">
  import {
    IconArrowDown,
    IconArrowLeft,
    IconArrowRight,
    IconArrowUp,
  } from "@tabler/icons-svelte";

  // --------------------------
  // 1. Define multi-language text map (English + Chinese)
  // --------------------------
  const i18n = {
    en: {
      shortcuts: "Shortcuts",
      switchLang: "Switch to Chinese",
      general: {
        title: "General",
        esc: "Show/hide This Box",
        j: "Open/close Settings",
        arrowRight: "Next Background Image",
        arrowLeft: "Previous Background Image",
        ctrlR: "Restart",
      },
      mainTrack: {
        title: "Main Track",
        spacebar: "Play/Pause Main Track",
      },
      effects: {
        title: "Effects",
        a: "Control The Rain",
        s: "Control The Thunder Storm",
        d: "Control The Nature Sounds",
        f: "Control The Campfire",
      },
      ambientTracks: {
        title: "Ambient Tracks",
        arrowUp: "Navigate To Next Track",
        arrowDown: "Navigate To Previous Track",
        k: "Stop All Ambient Sounds",
        trackDesc: (track: number) => `Play/Pause Ambient Track ${track}`,
      },
    },
    zh: {
      shortcuts: "快捷键",
      switchLang: "切换英文",
      general: {
        title: "通用操作",
        esc: "显示/隐藏此面板",
        j: "打开/关闭设置",
        arrowRight: "下一张背景图",
        arrowLeft: "上一张背景图",
        ctrlR: "重新开始",
      },
      mainTrack: {
        title: "主轨道",
        spacebar: "播放/暂停主轨道",
      },
      effects: {
        title: "效果音",
        a: "控制雨声",
        s: "控制雷雨声",
        d: "控制自然音效",
        f: "控制篝火声",
      },
      ambientTracks: {
        title: "环境音轨道",
        arrowUp: "切换到下一个轨道",
        arrowDown: "切换到上一个轨道",
        k: "停止所有环境音",
        trackDesc: (track: number) => `播放/暂停环境音轨道 ${track}`,
      },
    },
  };

  // --------------------------
  // 2. Language switch logic
  // --------------------------
  let currentLang: "en" | "zh" = "en"; // Default to English
  const toggleLang = () => {
    currentLang = currentLang === "en" ? "zh" : "en";
  };

  // Get current language text (reactive)
  $: text = i18n[currentLang];

  // --------------------------
  // Original business logic (unchanged)
  // --------------------------
  let ambientTracks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<div class="shortcuts">
  <!-- -------------------------- -->
  <!-- Add language switch button (matches original UI style) -->
  <!-- -------------------------- -->
  <button class="lang-switch-btn" on:click={toggleLang}>
    {text.switchLang}
  </button>

  <!-- -------------------------- -->
  <!-- Replace hardcoded text with multi-language variables -->
  <!-- -------------------------- -->
  <h4>{text.shortcuts}</h4>

  <!-- General Shortcuts -->
  <h5 style="margin-left: 10px;">{text.general.title}</h5>
  <div class="shortcut">
    <div class="shortcut-key">Esc</div>
    <div class="shortcut-desc">{text.general.esc}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key">J</div>
    <div class="shortcut-desc">{text.general.j}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key"><IconArrowRight size={15} /></div>
    <div class="shortcut-desc">{text.general.arrowRight}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key"><IconArrowLeft size={15} /></div>
    <div class="shortcut-desc">{text.general.arrowLeft}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key">CTRL + R</div>
    <div class="shortcut-desc">{text.general.ctrlR}</div>
  </div>

  <!-- Main Track -->
  <h5 style="margin-left: 10px;">{text.mainTrack.title}</h5>
  <div class="shortcut">
    <div class="shortcut-key">SPACEBAR</div>
    <div class="shortcut-desc">{text.mainTrack.spacebar}</div>
  </div>

  <!-- Effects Shortcuts -->
  <h5 style="margin-left: 10px;">{text.effects.title}</h5>
  <div class="shortcut">
    <div class="shortcut-key">A</div>
    <div class="shortcut-desc">{text.effects.a}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key">S</div>
    <div class="shortcut-desc">{text.effects.s}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key">D</div>
    <div class="shortcut-desc">{text.effects.d}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key">F</div>
    <div class="shortcut-desc">{text.effects.f}</div>
  </div>

  <!-- Ambient Tracks Shortcuts -->
  <h5 style="margin-left: 10px;">{text.ambientTracks.title}</h5>
  <div class="shortcut">
    <div class="shortcut-key"><IconArrowUp size={15} /></div>
    <div class="shortcut-desc">{text.ambientTracks.arrowUp}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key"><IconArrowDown size={15} /></div>
    <div class="shortcut-desc">{text.ambientTracks.arrowDown}</div>
  </div>
  <div class="shortcut">
    <div class="shortcut-key">K</div>
    <div class="shortcut-desc">{text.ambientTracks.k}</div>
  </div>

  <!-- Ambient Tracks Loop (dynamic text) -->
  {#each ambientTracks as track}
    <div class="shortcut">
      <div class="shortcut-key">{track}</div>
      <div class="shortcut-desc">
        {text.ambientTracks.trackDesc(track)}
      </div>
    </div>
  {/each}
</div>

<style>
  /* -------------------------- */
  /* Original styles (unchanged) */
  /* -------------------------- */
  .shortcuts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 10px;
  }
  h4,
  h5 {
    margin: 0;
  }
  .shortcut {
    display: flex;
    gap: 1rem;
    font-size: small;
    margin-left: 20px;
  }

  .shortcut-key {
    min-width: 30px;
    background-color: #fff;
    color: #000;
    padding: 5px 10px;
    border-radius: 10px;
    text-align: center;
  }

  .shortcut-desc {
    color: #fff;
  }

  /* -------------------------- */
  /* Add language button style (matches original UI) */
  /* -------------------------- */
  .lang-switch-btn {
    /* Match .shortcut-key's padding + border-radius */
    padding: 5px 10px;
    border-radius: 10px;
    /* Match text style */
    font-size: small;
    /* Complement existing color scheme */
    background-color: #333; /* Dark background (fits white text) */
    color: #fff; /* Same as .shortcut-desc */
    border: none; /* No extra border */
    cursor: pointer;
    width: fit-content; /* Prevent button from stretching */
    margin-left: 20px; /* Align with .shortcut items */
  }

  /* Hover effect (subtle, no style break) */
  .lang-switch-btn:hover {
    background-color: #555;
  }
</style>
