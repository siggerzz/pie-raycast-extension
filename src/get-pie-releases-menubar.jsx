import { MenuBarExtra, open } from "@raycast/api";
import { fetchGithubData } from './api/github/get-releases.js';

export default function Command() {
    const { releases, isLoading, error } = fetchGithubData();

    if (isLoading) {
        return <MenuBarExtra isLoading icon="../assets/logos/icon.svg" tooltip="Loading releases..."></MenuBarExtra>;
    }

    if (error || !releases.length) {
        return <MenuBarExtra icon="../assets/logos/icon.svg" tooltip="No releases found"></MenuBarExtra>;
    }

    return (
        <MenuBarExtra icon="../assets/logos/icon@dark.svg" tooltip="GitHub Releases">
            {releases.map((release, index) => (
                <MenuBarExtra.Item 
                    key={index}
                    title={release.name}
                    onAction={() => open(release.html_url)}
                />
            ))}
        </MenuBarExtra>
    );
}
