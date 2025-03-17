function setup() {
  // 初始設定函數，只會執行一次
  createCanvas(windowWidth, windowHeight);

  // 創建 iframe
  let iframe = createDiv('<iframe src="https://www.tku.edu.tw/" width="100%" height="100%" frameborder="0"></iframe>');
  iframe.position(10, 10);
  iframe.size(windowWidth - 20, windowHeight - 20);
}

function draw() {
  background('#dde5b6');
  
  let numLines = 70; // 線條數量
  let spacing = width / numLines; // 線條間距
  let colors = ['#d8e2dc', '#ffe5d9', '#ffcad4', '#f4acb7', '#9d8189']; // 顏色選項
  
  for (let i = 0; i < numLines; i++) {
    let x = i * spacing + spacing / 2;
    let y1 = height;
    let y2 = height / 2; // 海草總長度固定到畫面的一半
    
    // 隨機選擇一些線條設置為較短的長度
    if (random() < 0.3) { // 30%的機率設置為較短的長度
      y2 = height * 0.75;
    }
    
    let color = colors[i % colors.length]; // 循環選擇顏色
    stroke(color); // 設置顏色
    strokeWeight(24); // 加粗線條，變為現在的三倍
    
    // 畫線的整個部分，左右搖動
    let phaseOffset = random(TWO_PI); // 隨機相位偏移
    for (let y = y1; y > y2; y -= 5) {
      let xOffset = sin((y + frameCount) * 0.005 + phaseOffset) * 3; // 減小擺動範圍並使擺動變得超慢
      line(x, y, x + xOffset, y - 5);
      x += xOffset;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}