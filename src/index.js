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
import { qnTargets } from 'qnTargets'
import { computationalResults } from 'computationalResults'
import { computedFiles } from 'computedFiles'
import { originalFiles } from 'originalFiles'
import { statsAbout } from 'statsAbout'
import { transcriptomeIndices } from 'transcriptomeIndices'

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
  qnTargets,
  computationalResults,
  computedFiles,
  originalFiles,
  statsAbout,
  transcriptomeIndices
}

export default (override = {}) => {
  const config = updateConfig(defaultConfig, override, true)

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
    qnTargets: qnTargets(config),
    computationalResults: computationalResults(config),
    computedFiles: computedFiles(config),
    originalFiles: originalFiles(config),
    statsAbout: statsAbout(config),
    transcriptomeIndices: transcriptomeIndices(config)
  }
}
