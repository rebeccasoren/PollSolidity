pragma solidity ^0.4.17;

contract Poll{
    struct Question{
        string description;
        bool complete;
        uint yays;
        uint nays;
        mapping(address => bool) voters;
        string answer;
    }
    address public manager;
    Question[] public questions;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    function Poll() public {
        manager=msg.sender;
    }
    
    function askQuestion(string description) public restricted{
        Question memory newQuestion = Question({
            description: description,
            complete: false,
            yays: 0,
            nays: 0,
            answer: ''
        });
        questions.push(newQuestion);
    }
    
    function voteYay(uint index) public{
       Question storage question = questions[index];
        require(!question.complete);
       require(!question.voters[msg.sender]);
       question.voters[msg.sender] = true;
       question.yays++;
    }
    
    function voteNay(uint index) public{
        Question storage question = questions[index];
        require(!question.complete);
        require(!question.voters[msg.sender]);
        question.voters[msg.sender] = true;
        question.nays++;
    }
    
    function updateAnswer(uint index) public restricted{
        Question storage question = questions[index];
         
        require(!question.complete);
        if(question.yays >= question.nays)
            question.answer = 'Yay';
        else
            question.answer = 'Nay';
        question.complete = true;
    }

    function getAnswer(uint index) public restricted view returns (string){
        Question storage question = questions[index];
        require(question.complete);
        return question.answer;
    }

    function getQuestionLength() public view returns (uint){
        return questions.length;
    }
}