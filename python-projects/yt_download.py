from tkinter import *
from pytube import YouTube
from youtube_downloader import download_res, download_highest_res, downlaod_lowest_res, download_audio, video_name

def fun():
	url = YouTube(str(url_entry.get().rstrip())) # https://www.youtube.com/watch?v=kRwAsd_V4ZM
	selection = option.get()
	if selection == 0:
		donwload_text['text'] = "Nic nie wybrano"
	else:
		video = url.streams.first()
		if selection == 1:
			res = select.get()
			download_res(url, res)
		elif selection == 2:
			download_highest_res(url)
		elif selection == 3:
			downlaod_lowest_res(url)
		elif selection == 4:
			download_audio(url)

		donwload_text['text'] = "Pobrano: " + str(video.title)

screen = Tk() # inicjacja ekranu
option = IntVar()
resolutions = ["144p", "240p", "360p", "480p", "720p", "1080p"] # lista jakosci filmu
#resolutions = [144, 240, 360, 480, 720, 1080] 
destination = '..\\videos' # sciezka zapisana filmu

# naglowek
main_text = Label(screen, text = "Youtube Downloader", font='Helvetica 18 bold')
link = Label(screen, text = "Link:", font='Helvetica 12')

# input box
url_entry = Entry(screen)

# opcje jakosci
r1 = Radiobutton(screen, text = "Pobierz dowolną jakość", variable = option, value = 1, font='Helvetica 10')
r2 = Radiobutton(screen, text = "Pobierz najwyższą jakość", variable = option, value = 2, font='Helvetica 10')
r3 = Radiobutton(screen, text = "Pobierz najniższą jakość", variable = option, value = 3, font='Helvetica 10')
r4 = Radiobutton(screen, text = "Pobierz muzykę", variable = option, value = 4, font='Helvetica 10')

# pobieranie 
download_but = Button(screen, text = "Download", font='Helvetica 12 bold', command = fun)
donwload_text = Label(screen, text = "", font='Helvetica 12')

# wartosci w liscie rowzijanej
select = StringVar()
resolution_list = OptionMenu(screen, select, *resolutions)
# pierwsza wybrana wartosc
select.set(resolutions[0])

# umiejscowienie rzeczy
main_text.grid(row = 0, column = 0, columnspan = 2, padx = 50)
link.grid(row = 1, column = 0, sticky = 'w')
url_entry.grid(row = 1, column = 0)
resolution_list.grid(row = 2, column = 1)
r1.grid(row = 2, column = 0)
r2.grid(row = 3, column = 0)
r3.grid(row = 4, column = 0)
r4.grid(row = 5, column = 0)
download_but.grid(row = 6, column = 0, columnspan = 2)
donwload_text.grid(row = 7, column = 0, columnspan = 2)

screen.mainloop()
