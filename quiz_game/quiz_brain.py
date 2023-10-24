class QuizBrain:
    def __init__(self, question_list):
        self.question_list = question_list
        self.question_number = 1
        self.score = 0

    def next_question(self, question_list):
        current_question = question_list[self.question_number]
        player_answer = input(
            f"Q{self.question_number} . {question_list[self.question_number].text}. True or False?  :")
        self.question_number += 1
        self.check_answer(player_answer, current_question.answer)

    def still_has_question(self):
        return self.question_number < len(self.question_list)

    def check_answer(self, user_answer, correct_answer):

        if user_answer.lower() == correct_answer.lower():
            print("You got it right")
            self.score += 1

        else:
            print("You are wrong")

