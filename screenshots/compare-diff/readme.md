# infobox page
<!-- Two-image comparison: Left + Right (Fixed Height 200px) -->
<div style="display: flex; gap: 10px; /* Spacing between images (adjustable) */">
  <!-- Left Image -->
  <div style="flex: 1; /* Equal width for both images */">
    <img 
      src="./infobox/original.png" 
      alt="Left comparison image" 
      style="height: 200px; /* Fixed height */ width: 100%; object-fit: contain; /* Prevent distortion */ border: 1px solid #eee; /* Optional border */"
    >
  </div>

  <!-- Right Image -->
  <div style="flex: 1; /* Equal width for both images */">
    <img 
      src="./infobox/my-chinese-support.png" 
      alt="Right comparison image" 
      style="height: 200px; /* Fixed height */ width: 100%; object-fit: contain; /* Prevent distortion */ border: 1px solid #eee; /* Optional border */"
    >
  </div>
</div>

<!-- Optional: Add captions (aligned with images) -->
<div style="display: flex; gap: 10px; margin-top: 5px;">
  <div style="flex: 1; text-align: center; font-size: 12px; color: #666;">Left Image Caption</div>
  <div style="flex: 1; text-align: center; font-size: 12px; color: #666;">Right Image Caption</div>
</div>