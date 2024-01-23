import { List} from "@raycast/api";
import { useState, useEffect } from "react";
import { fetchGithubData } from './api/github/get-releases.js';
import { getNpmLink } from './api/npm/npm.js';
import { formatTitle } from './utils';

export default function Command(props) {
    const componentFilter = props.arguments.component; // Accessing the component argument
    const { releases, isLoading, error } = fetchGithubData();

    const [filteredReleases, setFilteredReleases] = useState([]);

    useEffect(() => {
        setFilteredReleases(
            componentFilter 
                ? releases.filter(release => release.name.includes(componentFilter))
                : releases
        );
    }, [releases, componentFilter]);

    if (isLoading) {
        return <List isLoading />;
    }

    if (error) {
        return <List.EmptyView title="Failed to load updates" />;
    }

    return (
        <List 
            isShowingDetail
            searchBarPlaceholder="Search releases"
        >
            {filteredReleases.map((release, index) => (
                <List.Item
                    key={index}
                    title={formatTitle(release.name)}
                    detail={
                        <List.Item.Detail
                            markdown={release.body}
                            metadata={
                                <List.Item.Detail.Metadata>
                                    <List.Item.Detail.Metadata.Label 
                                        title="Release Date" text={new Date(release.published_at).toLocaleDateString()} />
                                    <List.Item.Detail.Metadata.Link 
                                        title="View on GitHub"
                                        text="Open in Browser" target={release.html_url} />
                                    <List.Item.Detail.Metadata.Link 
                                        title="View on npm"
                                        text="Open in Browser" target={getNpmLink(release.name)} />
                                </List.Item.Detail.Metadata>
                            }
                        />
                    }
                />
            ))}
        </List>
    );
}
