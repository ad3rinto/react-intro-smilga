from question_model import Question
from data import question_data
from quiz_brain import QuizBrain
is_on = True

question_bank = []
length_of_questions = len(question_data)


for item in range(length_of_questions):
    q_data = Question(question_data[item]["text"], question_data[item]["answer"])
    question_bank.append(q_data)


new_quiz = QuizBrain(question_bank)

while new_quiz.still_has_question():
    new_quiz.next_question(question_bank)

print("You have completed the quiz")
print(f"Your final score is {new_quiz.score}/{len(question_bank)}")