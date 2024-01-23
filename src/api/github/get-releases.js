import { useState, useEffect } from 'react'
import { Octokit } from "@octokit/rest";
import fetch from 'node-fetch';
import { authorize } from './oauth';

const fetchGithubData = () => {
    const [releases, setReleases] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await authorize();
                const octokit = new Octokit({ auth: token, request: { fetch } });

                const { data } = await octokit.rest.repos.listReleases({
                    owner: 'justeattakeaway',
                    repo: 'pie',
                    per_page: 100
                });

                const oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

                const recentReleases = data.filter(item => {
                    const releaseDate = new Date(item.published_at);
                    return releaseDate > oneWeekAgo && item.name.includes('@justeattakeaway');
                });

                setReleases(recentReleases);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { releases, isLoading, error };
}

export { fetchGithubData }
