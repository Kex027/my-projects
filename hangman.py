import random
import string
import re

words = ["kaczka", "komputer", "szyszka", "cheese", "spaghetti", "spaghetti"]
choseComputerWord = random.choice(words)
alphabet = list(string.ascii_lowercase)

lengthOfWord = len(choseComputerWord)
agentWord = []
health = 5
indexOfAgentWord = 1

for x in range(lengthOfWord):
	agentWord.append("_")
	print(agentWord[x], end = "")

#GAME
while health>0:
	playerChoose = input("\n\nWprowadz litere: ")

	if choseComputerWord.find(playerChoose) >= 0:
		alphabet.remove(playerChoose)
		if playerChoose in agentWord:
			print("Litera byla juz podana!")

		for m in range(lengthOfWord):
			if (choseComputerWord[m] == playerChoose):
				agentWord[m] = playerChoose

		if '_' not in agentWord:
			print("\n\t   WYGRALES!\n\tHaslo to: " + choseComputerWord.upper())
			break

		print("Ilosc zyc: ", health)
		for x in range(lengthOfWord):
			print(agentWord[x], end = "")

		print("\nPozostale litery: ")
		for i in range(len(alphabet)):
			print(alphabet[i], end = " ")
		#alphabet.remove(playerChoose)

	else:
		health -= 1

		print("Ilosc zyc: ", health)

		for x in range(lengthOfWord):
			print(agentWord[x], end = "")
 
		#nie uzwanie kiklku razy tej samej litery
