from turtle import Turtle, Screen

tim = Turtle()
tim.color("red")
tim.shape("turtle")

for i in range(40):
    tim.pendown()
    tim.forward(10)
    tim.pendown()
    tim.forward(10)

screen = Screen()
screen.exitonclick()
