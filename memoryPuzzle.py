import sys
import random
from time import sleep
from tkinter import *

window = Tk()
verticalNumButtons = 4
horizontalNumButtons = 4
buttonListNum = verticalNumButtons * horizontalNumButtons
buttonList = []
tiles = []
for i in range(buttonListNum):
	tiles.append(int(i % (buttonListNum / 2)))
random.shuffle(tiles)
discoverTiles = 0
tilesToCheck = []

def checkGameCorrectness():
	if buttonListNum % 2 != 0:
		print("Number of buttons is odd. Try again with even number.")
		sys.exit()

def checkTileCorrectness():
	global discoverTiles
	global tilesToCheck
	if len(tilesToCheck) == 2:
		if tilesToCheck[0]["text"] == tilesToCheck[1]["text"]:
			tilesToCheck[0]["state"] = "disabled"
			tilesToCheck[1]["state"] = "disabled"
			checkIfWin()
			tilesToCheck.clear()
			discoverTiles = 0

def checkIfWin():
	tileScore = 0
	for button in buttonList:
		if button["state"] == "disabled":
			tileScore += 1
	if tileScore == buttonListNum:
		print("WIN!!!")

def discoverTile(i, taleValue):
	global discoverTiles
	global tilesToCheck
	if buttonList[i]["text"] == " ":
		buttonList[i]["text"] = taleValue
		tilesToCheck.append(buttonList[i])
		discoverTiles += 1
	if discoverTiles == 2:
		checkTileCorrectness()	
	if discoverTiles == 3:
		for button in buttonList:
			if button["state"] == "normal":
				button["text"] = " "
		discoverTiles = 0
		tilesToCheck.clear()

def createButtons(tiles):
	for i in range(buttonListNum):
		button = Button(window, text = " ", width = 10, height = 4, command = lambda i=i: discoverTile(i, tiles[i % len(tiles)]))
		buttonList.append(button)

def gridButtons():
	rowButtonIndex = 0
	colButtonIndex = 0
	for i in range(len(buttonList)):
		buttonList[i].grid(column = colButtonIndex, row = rowButtonIndex)
		colButtonIndex += 1
		if colButtonIndex >= horizontalNumButtons:
			colButtonIndex = 0
			rowButtonIndex += 1

checkGameCorrectness()
createButtons(tiles)
gridButtons()

window.mainloop()
