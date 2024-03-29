import { render, fireEvent, cleanup } from '@testing-library/react';
import PlaybackBar from '../Playbackbar';

afterAll(cleanup);

describe('<PlaybackBar>', () => {
    beforeEach(cleanup);

    it('renders fine with highlights and check slider click', async () => {
        const changeCallback = jest.fn(index => index);

        const { container, getByTestId } = render(
            <PlaybackBar
                currentDuration={'00:30'}
                currentSlider={100}
                endDuration={'05:15'}
                highlights={[{ start: 50, end: 300, playback: true }]}
                setSlider={changeCallback}
                maxSlider={720}
            />
        );


        // test if the slider is clicked.
        fireEvent.click(getByTestId('slider'), { clientX: '256' });
        expect(changeCallback).toBeCalled();

        getByTestId("highlight").hasAttribute("position:'absolute'");
    });

    it('renders fine with multiple highlights', async () => {
        const changeCallback = jest.fn(index => index);

        const { container, getAllByTestId } = render(
            <PlaybackBar
                currentDuration={'00:30'}
                currentSlider={100}
                endDuration={'05:15'}
                highlights={[{ start: 50, end: 300, playback: false }, { start: 400, end: 500, playback: false }]}
                setSlider={changeCallback}
                maxSlider={720}
            />
        );
        expect(getAllByTestId("highlight").length).toEqual(2);

    });
});
