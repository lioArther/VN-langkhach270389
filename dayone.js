var obj = JSON.parse($response.body);

obj= {
 "subscriptionName": "premium",
 "subscriptionPlan": "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
 "bundleReason": "purchase",
 "expirationDate": 1890026360000,
 "lastRenewalDate": 1574406552000,
 "cancellationDate": 0,
 "startDate": 1574406552000
};
$done({body: JSON.stringify(obj)});
