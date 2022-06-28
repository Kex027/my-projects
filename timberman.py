import pygame
import random
import sys

pygame.init()
# naprawic kolor

BLOCK_SIZE = 50
BRANCH_HEIGHT = BLOCK_SIZE / 5
block_num = 10
SCREEN_WIDTH = 600
SCREEN_HEIGHT = BLOCK_SIZE * block_num

BROWN = (120, 42, 0)
DARK_BROWN = (100, 22, 0)
GRASS_GREEN = (0, 150, 0)
RED = (255, 0, 0)
SKY_BLUE = (77, 151, 255)

background = pygame.Surface((SCREEN_WIDTH, SCREEN_HEIGHT))
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
screen_rect = screen.get_rect()


class Main:
	def __init__(self):
		self.timber = Timber()
		self.left_block = Block(1, "right")
		self.middle_block = Block(0, "mid")
		self.right_block = Block(1, "left")
		self.all_possible_blocks = [self.left_block, self.right_block]
		self.tree = []
		self.make_grass()
		self.make_tree_list()
		self.score = 0

	def make_tree_list(self):
		for i in range(block_num):
			if i % 2 == 0:
				self.tree.append(self.middle_block)
			else:
				self.tree.append(random.choice(self.all_possible_blocks))

	def display_whole_tree(self):
		for i in range(len(self.tree)):
			if i % 2 == 0:
				self.display_tree_block(i)
			else:
				self.display_tree_block(i)

	def display_tree_block(self, i): # with proper height (y)
		if self.tree[i].branch_num == 1:
			self.tree[i].branch_rect.y = SCREEN_HEIGHT - BLOCK_SIZE * 2 - (i * BLOCK_SIZE - BLOCK_SIZE + BRANCH_HEIGHT * 2)
		self.tree[i].trunk_rect.y = SCREEN_HEIGHT - BLOCK_SIZE * 2 - (i * BLOCK_SIZE)
		self.tree[i].display_block()

	def make_grass(self):
		self.grass = pygame.Rect(0, SCREEN_HEIGHT - BLOCK_SIZE, SCREEN_WIDTH, BLOCK_SIZE)

	def display_items(self):
		# grass
		pygame.draw.rect(screen, GRASS_GREEN, self.grass)
		# tree
		self.display_whole_tree()
		# player
		self.timber.display_player()


class Block:
	def __init__(self, branch, side):
		self.branch_num = branch
		self.side = side
		self.x = SCREEN_WIDTH / 2 - BLOCK_SIZE / 2
		self.y = 0
		self.create_block(0)

	def create_block(self, y):
		self.y = y
		self.trunk_rect = pygame.Rect(self.x, self.y, BLOCK_SIZE, BLOCK_SIZE)
		if self.branch_num == 1:
			if self.side == "left":
				self.branch_rect = pygame.Rect(self.x - BLOCK_SIZE, self.y, BLOCK_SIZE, BRANCH_HEIGHT)
			elif self.side == "right":
				self.branch_rect = pygame.Rect(self.x + BLOCK_SIZE, self.y, BLOCK_SIZE, BRANCH_HEIGHT)

	def display_block(self):
		if self.branch_num == 1:
			pygame.draw.rect(screen, BROWN, self.trunk_rect)
			pygame.draw.rect(screen, BROWN, self.branch_rect)
		else:
			pygame.draw.rect(screen, DARK_BROWN, self.trunk_rect)


class Timber(Main):
	def __init__(self):
		self.x = SCREEN_WIDTH / 2 - BLOCK_SIZE * 2
		self.y = SCREEN_HEIGHT - BLOCK_SIZE * 2
		self.player_rect = pygame.Rect(self.x, self.y, BLOCK_SIZE, BLOCK_SIZE)

	def display_player(self):
		pygame.draw.rect(screen, RED, self.player_rect)

	def chop(self, side, x):
		# change side
		self.player_rect.x = SCREEN_WIDTH / 2 + x 
		# check if is good side
		if (main.tree[0].side == side or main.tree[1].side == side):
			print("Score: " + str(main.score))
			sys.exit()
		else:
			main.score += 10
			# add block
			if main.score % 20 == 10:
				main.tree.append(main.middle_block)
			else:
				main.tree.append(random.choice(main.all_possible_blocks))
		# chop
		main.tree.pop(0)


main = Main()

running = True
clock = pygame.time.Clock()
FPS = 60

while running:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			running = False

		if event.type == pygame.KEYDOWN:
			if event.key == pygame.K_v:
				main.timber.chop("left", -BLOCK_SIZE * 2)
			if event.key == pygame.K_m:
				main.timber.chop("right", BLOCK_SIZE)

	screen.blit(background,(0,0))
	screen.fill(SKY_BLUE)
	main.display_items()

	pygame.display.update()
	clock.tick(FPS)