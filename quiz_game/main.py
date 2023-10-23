from question_model import Question
from data import question_data

question_bank = []
length_of_questions = len(question_data)


for item in range(length_of_questions):
    q_data = Question(question_data[item]["text"], question_data[item]["answer"])
    question_bank.append(q_data)


