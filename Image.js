var img = new SimpleImage(200,200);
for ( var pixels of img.values() ) {
var Red=pixels.setRed(250);
var Blue=pixels.setBlue(0);
var Green=pixels.setGreen(200);
}
print(img);