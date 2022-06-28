from tkinter import *

screen = Tk()

# Inicializing items

Circle = "   **   \n  *        *  \n *          * \n*         *\n   **   "
Kross = "*     *\n   *   *   \n    *    \n   *   *   \n*     *"

turn = 0

def clearFrame():
    # destroy all widgets from frame
    for widget in screen.winfo_children():
       widget.destroy()

def putKross(place_id):
	place_id['text'] = Kross  

def putCircle(place_id):
	place_id['text'] = Circle

def dependence(place_id):
	global turn
	turn += 1 
	place_id['state'] = DISABLED

	if turn % 2 == 1:
		putCircle(place_id)
	else:
		putKross(place_id) 

	def endGame(alert):
		clearFrame()
		endGame = Label(screen, text = alert, font = ('Sans', 30, 'bold'), fg = 'green')
		playAgain = Button(screen, text = "Zagraj jeszcze raz!", font = ('Sans', 20, 'bold'), command = createButtons)
		quitGame = Button(screen, text = "Wyjdz", font = ('Sans', 20, 'bold'), command = quit)

		endGame.grid(column = 1, row = 0)
		playAgain.grid(column = 1, row = 1)
		quitGame.grid(column = 1, row = 2)

	# WINNING SYSTEM
	# FOR CIRCLE
	if (place_1['text'] == Circle and place_2['text'] == Circle and place_3['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
	elif (place_4['text'] == Circle and place_5['text'] == Circle and place_6['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
	elif (place_7['text'] == Circle and place_8['text'] == Circle and place_9['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
	elif (place_1['text'] == Circle and place_4['text'] == Circle and place_7['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
	elif (place_2['text'] == Circle and place_5['text'] == Circle and place_8['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
	elif (place_3['text'] == Circle and place_6['text'] == Circle and place_9['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
	elif (place_1['text'] == Circle and place_5['text'] == Circle and place_9['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
	elif (place_3['text'] == Circle and place_5['text'] == Circle and place_7['text'] == Circle):
		endGame("WYGRAŁO KÓŁKO!")
		# FOR KROSS
	elif (place_1['text'] == Kross and place_2['text'] == Kross and place_3['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif (place_4['text'] == Kross and place_5['text'] == Kross and place_6['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif (place_7['text'] == Kross and place_8['text'] == Kross and place_9['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif (place_1['text'] == Kross and place_4['text'] == Kross and place_7['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif (place_2['text'] == Kross and place_5['text'] == Kross and place_8['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif (place_3['text'] == Kross and place_6['text'] == Kross and place_9['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif (place_1['text'] == Kross and place_5['text'] == Kross and place_9['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif (place_3['text'] == Kross and place_5['text'] == Kross and place_7['text'] == Kross):
		endGame("WYGRAŁ KRZYŻYK")
	elif place_1['text'] != " " and place_2['text'] != " " and place_3['text'] != " " and place_4['text'] != " " and place_5['text'] != " " and place_6['text'] != " " and place_7['text'] != " " and place_8['text'] != " " and place_9['text'] != " ":
		endGame("REMIS")



def createButtons():
	clearFrame()
	turn = 0
	global tictactoe
	global place_1
	global place_2
	global place_3
	global place_4
	global place_5
	global place_6
	global place_7
	global place_8
	global place_9

	# Game buttons 
	tictactoe = Label(screen, text = "Tic Tac Toe", font = ('Sans', 15, "bold"))
	place_1 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_1))
	place_2 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_2))
	place_3 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_3))
	place_4 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_4))
	place_5 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_5))
	place_6 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_6))
	place_7 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_7))
	place_8 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_8))
	place_9 = Button(screen, text = " ", width = 15, height = 5, command = lambda: dependence(place_9))

	tictactoe.grid(column = 1, row = 0)
	place_1.grid(column = 0, row = 1)
	place_2.grid(column = 1, row = 1)
	place_3.grid(column = 2, row = 1)
	place_4.grid(column = 0, row = 2)
	place_5.grid(column = 1, row = 2)
	place_6.grid(column = 2, row = 2)
	place_7.grid(column = 0, row = 3)
	place_8.grid(column = 1, row = 3)
	place_9.grid(column = 2, row = 3)

createButtons()

screen.mainloop()

# Tryb jedno i dwu osobowy