function getCurrentDateUnix() {
  const now = Date.now();
  const unixTime = Math.round(now / 1000);
  return unixTime.toString();
}
const fields = `fields name,genres.name,aggregated_rating,cover.url,involved_companies.company.name,videos.video_id,screenshots.url,first_release_date,summary,platforms.name,similar_games.name,similar_games.cover.url,game_modes.name,hypes;`;

const nullExcludeStr = `where name != null & genres.name != null & cover.url != null & first_release_date != null & platforms.name != null & videos.video_id != null & involved_companies.company.name != null`;

const querys = {
  recentGames: `${fields} sort first_release_date desc; ${nullExcludeStr} & aggregated_rating != null & first_release_date < ${getCurrentDateUnix()}`,
  comingSoon: `${fields} sort first_release_date asc; ${nullExcludeStr} & first_release_date > 1662424992`,
  top100: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null`,
  coopMultiplayer: `${fields} sort hypes desc; ${nullExcludeStr} & hypes != null`,
  shooters: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Shooter"`,
  platformsGames: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Platform"`,
  mmo: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Role-playing (RPG)"`,
  indies: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & genres.name = "Indie"`,
  ps4: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "PlayStation 4"`,
  xbox: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "Xbox One"`,
  pc: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "PC (Microsoft Windows)"`,
  nintendo: `${fields} sort total_rating desc; ${nullExcludeStr} & aggregated_rating != null & platforms.name = "Nintendo Switch"`,
  pruebas: `${fields} sort first_release_date asc; where platforms.name != null & videos.video_id != null & first_release_date > 1662424992; limit 400;`,
};

export default querys;
