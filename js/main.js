var zodiac = [
	{
		sign: "rat",
		fortune: "Those born under the Chinese Zodiac sign of the Rat are quick-witted, clever, charming, sharp and funny. They have excellent taste, are a good friend and are generous and loyal to others considered part of its pack. Motivated by money, can be greedy, is ever curious, seeks knowledge and welcomes challenges. Compatible with Dragon or Monkey.",
		image: "img/rat.jpg"
	},
	{
		sign: "goat",
		fortune: "Occupying the 8th position in the Chinese Zodiac, the Goat (or Sheep) symbolizes such character traits as creativity, intelligence, dependability, and calmness. Comfortable being alone to ponder the workings of their inner minds, Goats enjoy being part of a group, but prefer the sidelines rather than the center. Their nurturing personality makes Goats excellent care-givers. They are quite and reserved because they spend much time absorbed in their thoughts.",
		image: "img/goat.jpg"
	},
	{
		sign: "ox",
		fortune: "Another of the powerful Chinese Zodiac signs, the Ox is steadfast, solid, a goal-oriented leader, detail-oriented, hard-working, stubborn, serious and introverted but can feel lonely and insecure. Takes comfort in friends and family and is a reliable, protective and strong companion. Compatible with Snake or Rooster.",
		image: "img/ox.jpg"
	},
	{
		sign: "tiger",
		fortune: "Those born under the Chinese Zodiac sign of the Tiger are authoritative, self-possessed, have strong leadership qualities, are charming, ambitious, courageous, warm-hearted, highly seductive, moody, intense, and they are ready to pounce at any time. Compatible with Horse or Dog.",
		image: "img/tiger.jpg"
	},
	{
		sign: "dragon",
		fortune: "A powerful sign, those born under the Chinese Zodiac sign of the Dragon are energetic and warm-hearted, charismatic, lucky at love and egotistic. They are natural born leaders, good at giving orders and doing what is necessary to remain on top. Compatible with Monkey and Rat.",
		image: "img/dragon2.jpg"
	},
	{
		sign: "rabbit",
		fortune: "Those born under the Chinese Zodiac sign of the Rabbit enjoy being surrounded by family and friends. They are popular, compassionate, sincere, and they like to avoid conflict and are sometimes seen as pushovers. Rabbits enjoy home and entertaining at home. Compatible with Goat or Pig.",
		image: "img/rabbit.jpg"
	},
	{
		sign: "snake",
		fortune: "Those born under the Chinese Zodiac sign of the Snake are seductive, gregarious, introverted, generous, charming, good with money, analytical, insecure, jealous, slightly dangerous, smart, they rely on gut feelings, are hard-working and intelligent. Compatible with Rooster or Ox.",
		image: "img/snake.jpg"
	},
	{
		sign: "horse",
		fortune: "Those born under the Chinese Zodiac sign of the Horse love to roam free. They are energetic, self-reliant, money-wise, and they enjoy traveling, love and intimacy. They are great at seducing, sharp-witted, impatient and sometimes seen as a drifter. Compatible with Dog or Tiger.",
		image: "img/horse.jpg"
	},
	{
		sign: "monkey",
		fortune: "Those born under the Chinese Zodiac sign of the Monkey thrive on having fun. They are energetic, upbeat, and good at listening but lack self-control. They like being active and stimulated and enjoy pleasing self before pleasing others. They are heart-breakers, not good at long-term relationships, morals are weak. Compatible with Rat or Dragon.",
		image: "img/monkey.jpg"
	},
	{
		sign: "rooster",
		fortune: "Those born under the Chinese Zodiac sign of the Rooster are practical, resourceful, observant, analytical, straightforward, trusting, honest, perfectionists, neat and conservative. Compatible with Ox or Snake.",
		image: "img/rooster.jpg"
	},
	{
		sign: "dog",
		fortune: "Those born under the Chinese Zodiac sign of the Dog are loyal, faithful, honest, distrustful, often guilty of telling white lies, temperamental, prone to mood swings, dogmatic, and sensitive. Dogs excel in business but have trouble finding mates. Compatible with Tiger or Horse.",
		image: "img/dog.jpg"
	},
	{
		sign: "pig",
		fortune: "Those born under the Chinese Zodiac sign of the Pig are extremely nice, good-mannered and tasteful. They are perfectionists who enjoy finer things but are not perceived as snobs. They enjoy helping others and are good companions until someone close crosses them, then look out! They are intelligent, always seeking more knowledge, and exclusive. Compatible with Rabbit or Goat.",
		image: "img/pig.jpg"
	}
]

function horoscope() {
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = "You're best attributes are: " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}