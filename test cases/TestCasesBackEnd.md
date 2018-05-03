# This set of Test Cases are applicable for the python classifier

| Test Case ID | Test Scenario                             | Test Steps                                                   | Test Data           | Expected Results          | Actual Results	Pass/Fail         |
| ------------ | ----------------------------------------- | ------------------------------------------------------------ | ------------------- | ------------------------- | ----------------------------------- |
| TUBE01       | Check if Average Size returns legal value | 1. Assign legal value to humanSizeSample and sum value.<br />2. Ensure that the quotient is a legal value as well. | humanSizeSample = 8 | 1                         | 1 - Pass                            |
| TUBE02       | Check with multiple srcTest video codecs  | 1. Change the extension<br />2. Check for errors when new video codec is used | .avi, .mp4, .mpeg   | error handling            | error handling done properly - Pass |
| TUBE03       | Check if frame_no is handled correctly    | 1. Put frame_no as 100, 200, 300 and 400.<br />2. Classification should remain the same | frame_no values     | consistent classification | consistent classification - Pass    |
