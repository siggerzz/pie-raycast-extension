// import { List, LocalStorage, ActionPanel, Action } from "@raycast/api";
// import { getJETPackages } from "./api/npm/npm";
// import { useState, useEffect } from "react";

// export default function Command() {
//     const [packages, setPackages] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         async function fetchPackages() {
//             let fetchedPackages = await getJETPackages();
//             fetchedPackages = fetchedPackages.map(pkg => ({ ...pkg, subscribed: false }));
//             setPackages(fetchedPackages);
//             setIsLoading(false);
//         }
//         fetchPackages();
//     }, []);

//     const toggleSubscription = async (pkg, index) => {
//         // Toggle the subscribed status first
//         const newSubscribedStatus = !pkg.subscribed;
//         const updatedPackage = { ...pkg, subscribed: newSubscribedStatus };
//         const updatedPackages = [...packages];
//         updatedPackages[index] = updatedPackage;
    
//         // Update the state immediately to reflect the new status in the UI
//         setPackages(updatedPackages);
    
//         // Perform the storage operation based on the new subscribed status
//         if (newSubscribedStatus) {
//             // If now subscribed, add to storage
//             await LocalStorage.setItem("selected-package", JSON.stringify(updatedPackage));
//         } else {
//             // If now unsubscribed, remove from storage
//             await LocalStorage.removeItem("selected-package");
//             console.log("Unsubscribed from package:", updatedPackage);
//         }
//     };
    

//     return (
//         <List isLoading={isLoading} searchBarPlaceholder="Search releases">
//             {packages.map((pkg, index) => (
//                 <List.Item
//                     key={index}
//                     title={pkg.subscribed ? `${pkg.name} - ✅` : pkg.name}
//                     subtitle={`Version: ${pkg.version}`}
//                     accessoryTitle={new Date(pkg.date).toLocaleDateString()}
//                     detail={
//                         <List.Item.Detail
//                             markdown={`### ${pkg.name}\n\n${pkg.description}\n\n[NPM Link](${pkg.npmLink})`}
//                         />
//                     }
//                     actions={
//                         <ActionPanel>
//                             <Action
//                                 title={pkg.subscribed ? "Unsubscribe" : "Subscribe"}
//                                 onAction={() => toggleSubscription(pkg, index)}
//                             />
//                         </ActionPanel>
//                     }
//                 />
//             ))}
//         </List>
//     );
// }
