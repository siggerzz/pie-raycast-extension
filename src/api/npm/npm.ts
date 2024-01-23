import fetch from "node-fetch";
import { LocalStorage } from "@raycast/api";

const getNpmLink = (fullPackageName: string) => {
    // Split the package name at each '@' and ignore the first empty string if it's a scoped package
    const parts = fullPackageName.split('@');


    // Scoped packages will have more than 2 parts after split
    let packageName;
    if (parts.length > 2) {
        // Rejoin the first two parts with '@' for scoped packages and discard the version
        packageName = `@${parts[1]}`;
    } else {
        // For non-scoped packages, the package name is the first part
        packageName = parts[0];
    }

    return `https://www.npmjs.com/package/${packageName}`;
};

// api/npm/npm.js
const getJETPackages = async () => {
    try {
        const response = await fetch("https://registry.npmjs.org/-/v1/search?text=@justeattakeaway");
        const json = await response.json();
        return json.objects.map(item => ({
            name: item.package.name,
            version: item.package.version,
            description: item.package.description,
            date: item.package.date,
            npmLink: item.package.links.npm
        }));
    } catch (error) {
        console.error('Error fetching packages:', error);
        return []; // Return an empty array in case of error
    }
};


const addPackageToStorage = async (pkg) => {
    // Add the selected package to storage
    await LocalStorage.setItem("selected-package", JSON.stringify(pkg.name));
    const item = await LocalStorage.getItem("selected-package");
    console.log("Package added to storage:", JSON.parse(item.name));
};

export {
    getNpmLink,
    getJETPackages,
    addPackageToStorage
}
