import defaultConfig from 'config'
import { token } from 'token'
import { organisms } from 'organisms'
import { dataset } from 'dataset'
import { institutions } from 'institutions'
import { platforms } from 'platforms'
import { compendia } from 'compendia'
import { processors } from 'processors'
import { samples } from 'samples'
import { experiments } from 'experiments'
import { search } from 'search'
import { stats } from 'stats'
import { jobs } from 'jobs'
import { qn_targets } from 'qn_targets'
import { computational_results } from 'computational_results'
import { computed_files } from 'computed_files'
import { original_files } from 'original_files'
import { stats_about } from 'stats-about'
import { transcriptome_indices } from 'transcriptome_indices'

const updateConfig = (source, changes, clone = false) => {
  if (clone) {
    return { ...source, ...changes }
  }
  if (!changes) {
    return source
  }

  const modifiedSource = source

  Object.keys(changes).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(source, key)) {
      console.error(`${key} is an invalid key`)
    }

    modifiedSource[key] = changes[key]
  })

  return modifiedSource
}

export {
  token,
  institutions,
  dataset,
  platforms,
  compendia,
  processors,
  samples,
  experiments,
  search,
  stats,
  jobs,
  qn_targets,
  computational_results,
  computed_files,
  original_files,
  stats_about,
  transcriptome_indices
}

export default (override = {}) => {
  const config = updateConfig(defaultConfig, override, true) // { host, version, path, verbos, uuid }

  return {
    updateConfig: (changes) => updateConfig(config, changes, false),
    token: token(config),
    dataset: dataset(config),
    organisms: organisms(config),
    institutions: institutions(config),
    platforms: platforms(config),
    compendia: compendia(config),
    processors: processors(config),
    samples: samples(config),
    search: search(config),
    stats: stats(config),
    jobs: jobs(config),
    experiments: experiments(config),
    qn_targets: qn_targets(config),
    computational_results: computational_results(config),
    computed_files: computed_files(config),
    original_files: original_files(config),
    stats_about: stats_about(config),
    transcriptome_indices: transcriptome_indices(config)
  }
}
