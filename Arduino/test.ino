#include <dht.h>

dht DHT;

//Define list
#define DHT11_PIN 7
#define DTH11_TEMPERATURE 1
#define DTH11_HUMIDITY 2
#define HCSR04 3 

int selectedModule(int module){
  return(module);
  }

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(14, OUTPUT);
  

}

void loop() {
  int module = selectedModule(DTH11_TEMPERATURE);
  int chk;
  switch (module){
  case 1:
   // Serial.print("Start gathering \n");
    Serial.print("temperature sensor \n");
    Serial.print("Get the temperature in celsius \n");
    chk = DHT.read11(DHT11_PIN);
    //Serial.print("Temperature = ");
    //output
    Serial.println(DHT.temperature);
    //Serial.print("Humidity = ");
    //Serial.println(DHT.humidity);
    Serial.print("DTH11 \n");
    delay(10000);
    break;
  case 2:
  break;
  }
  
  //blinking led
  /*digitalWrite(14, HIGH);
  Serial.print("LED HIGH \n");
  delay(1000);
  digitalWrite(14, LOW);
  Serial.print("LED LOW \n");
  delay(1000);*/
 

 
}
