// script.js

// Create a hash map named leetcode
var leetcode = {
    //Binary Search
    "sorted insert position": "https://leetcode.com/problems/search-insert-position/description/",
    "find a peak element": "https://leetcode.com/problems/find-peak-element/description/",
    "rotated sorted array search": "https://leetcode.com/problems/search-in-rotated-sorted-array/description/",
    "single element in sorted array": "https://leetcode.com/problems/single-element-in-a-sorted-array/description/",
    "median of two sorted arrays": "https://leetcode.com/problems/median-of-two-sorted-arrays/description/",
    "smallest good base": "https://leetcode.com/problems/smallest-good-base/description/",

    //Bit Manipulation
    "single number": "https://leetcode.com/problems/single-number/description/",
    "number of 1 bits": "https://leetcode.com/problems/number-of-1-bits/description/",
    "reverse bits": "https://leetcode.com/problems/reverse-bits/description/",
    "single number II": "https://leetcode.com/problems/single-number-ii/description/",
    "single number III": "https://leetcode.com/problems/single-number-iii/description/",
    "min xor value": "https://leetcode.com/problems/minimize-xor/description/",
    "single number III": "https://leetcode.com/problems/single-number-iii/description/",
    "single number III": "https://leetcode.com/problems/single-number-iii/description/",

    // 2 Pointer's
    "container with most water": "https://leetcode.com/problems/container-with-most-water/",
    "single number III": "https://leetcode.com/problems/single-number-iii/description/",

    // Linked List
    "reverse linked list": "https://leetcode.com/problems/reverse-linked-list/description/",
    "reverse link list II": "https://leetcode.com/problems/reverse-linked-list-ii/description/",
    "merge two sorted lists": "https://leetcode.com/problems/merge-two-sorted-lists/description/",
    "copy list": "https://leetcode.com/problems/copy-list-with-random-pointer/description/",
    "sort list": "https://leetcode.com/problems/sort-list/description/",
    "remove duplicates from sorted list": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/",
    "remove duplicates from sorted list II": "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/",
    "list cycle": "https://leetcode.com/problems/linked-list-cycle/description/",
    "lru cache": "https://leetcode.com/problems/lru-cache/description/",

    // Stacks and Queue
    "min stack": "https://leetcode.com/problems/min-stack/description/",
    "next greater": "https://leetcode.com/problems/next-greater-element-i/description/",
    "largest rectangle in histogram": "https://leetcode.com/problems/largest-rectangle-in-histogram/description/",
    "queue using stacks": "https://leetcode.com/problems/implement-queue-using-stacks/description/",
    "min stack": "https://leetcode.com/problems/min-stack/description/",
    //Trees Question
    "level order": "https://leetcode.com/problems/binary-tree-level-order-traversal/description/",
    "right view of binary tree": "https://leetcode.com/problems/binary-tree-right-side-view/description/",
    "binary tree from inorder and preorder": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/",
    "preorder traversal": "https://leetcode.com/problems/binary-tree-preorder-traversal/description/",
    "postorder traversal": "https://leetcode.com/problems/binary-tree-postorder-traversal/description/",
    "valid binary search tree": "https://leetcode.com/problems/validate-binary-search-tree/description/",
    "balanced binary tree": "https://leetcode.com/problems/balanced-binary-tree/description/",
    // Add more entries as needed...
};
 // Queue to store contributions
 var contributionQueue = [];

 var btn = document.getElementById('generateLinkBtn');
 console.log('button', btn);
 btn.addEventListener("click", function() {
     getQuestionName();
 });

 // Add event listener to the "Contribute" form
 document.getElementById("contributionForm").addEventListener("submit", function(event) {
     event.preventDefault();
     contributeQuestion();
 });

 function getQuestionName() {
     // Get the value of the "Question Name" input field and trim any leading or trailing white spaces
     var questionNameValue = document.getElementById("username").value.trim().toLowerCase();

     if (leetcode.hasOwnProperty(questionNameValue)) {
         chrome.tabs.create({ url: leetcode[questionNameValue] });
     } else {
         // Hide the "Ask Question" form
         document.getElementById("askQuestionForm").style.display = "none";

         // Display the "Contribution" form
         document.getElementById("contributionForm").style.display = "block";
     }
 }

 function contributeQuestion() {
     var contributionQuestionIdValue = document.getElementById("contributionQuestionId").value.trim();
     var contributionQuestionLinkValue = document.getElementById("contributionQuestionLink").value.trim();
     var contributorNameValue = document.getElementById("contributorName").value.trim();

     // Check if the contribution question ID already exists in the hashmap
     if (leetcode.hasOwnProperty(contributionQuestionIdValue)) {
         alert('Question ID already exists in the hashmap.');
         return;
     }

     // Add the contribution to the queue
     contributionQueue.push({
         questionId: contributionQuestionIdValue,
         questionLink: contributionQuestionLinkValue,
         contributorName: contributorNameValue,
     });

     // Optionally, you can display a success message or update the UI
     alert('Contribution added to the queue.' + contributionQueue[0].questionId + ' ' + contributionQueue[0].questionLink + ' ' + contributionQueue[0].contributorName);


     // Hide the "Contribution" form after submission`
     document.getElementById("contributionForm").style.display = "none";

     // Show the "Ask Question" form again
     document.getElementById("askQuestionForm").style.display = "block";
 }